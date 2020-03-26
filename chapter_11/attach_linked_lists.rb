# Write a method that attaches two linked lists together.

class Node

  attr_accessor :data, :next_node, :previous_node

  def initialize(data)
    @data = data
  end

end

class LinkedList

  attr_accessor :first_node, :last_node

  def initialize(first_node = nil, last_node = nil)
    @first_node = first_node
    @last_node = last_node
  end

  # two linked lists attachment method
  def attach_linked_list(linked_list)
    if !(@first_node)
      @first_node = linked_list.first_node
      @last_node = linked_list.last_node
    else
      linked_list.first_node.previous_node = @last_node
      @last_node.next_node = linked_list.first_node
      @last_node = linked_list.last_node
      linked_list.first_node = @first_node
    end
  end

end